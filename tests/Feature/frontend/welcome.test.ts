import Welcome from '@/Pages/Welcome.vue';
import { mount } from '@vue/test-utils'
import { plugin as InertiaPlugin } from '@inertiajs/inertia-vue3'

jest.mock('ziggy-js');

describe("Test Welcome Page", () => {

    it("renders Welcome Page", () => {
        let head_title = '';

        const wrapper = mount(Welcome, {
            global: {
                plugins: [InertiaPlugin],
                mocks: {
                    $page: {
                        props: {
                            canLogin: true,
                            canRegister: true,
                            user: undefined,
                        }
                    },
                    $headManager: {
                        createProvider: () => {
                            return {
                                update: (elements: Array<string>) => {
                                    head_title = elements.filter((value) => value.indexOf("title") != -1).join()
                                },
                                disconnect: () => {}
                            }
                        }
                    }
                },
            },
        });

        const welcome_msg = wrapper.get('h1 b')

        expect(welcome_msg.text()).toBe('Καλωσορίσατε στο σύστημα των προσωπικών σας σημειώσεων!');
        expect(head_title).toContain('Καλωσορίσατε');
    });

});

