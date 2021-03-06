import { PageProps } from "@inertiajs/inertia";

declare module "@inertiajs/inertia" {
    export interface PageProps {
      jetstream: {
        canCreateTeams: boolean;
        canManageTwoFactorAuthentication: boolean;
        canUpdatePassword: boolean;
        canUpdateProfileInformation: boolean;
        hasEmailVerification: boolean
        flash: Record<string, unknown>
        hasAccountDeletionFeatures: boolean;
        hasApiFeatures: boolean;
        hasTeamFeatures: boolean;
        hasTermsAndPrivacyPolicyFeature: boolean;
        managesProfilePhotos: boolean;
      },
      user: App.Models.User & {
          all_teams?: Array<App.Models.Team> | null
          current_team?: App.Models.Team
          two_factor_enabled: boolean
      };
    }
  }
