/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models {
    export interface User {
        id: number;
        username: string;
        name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        two_factor_secret: string | null;
        two_factor_recovery_codes: string | null;
        two_factor_confirmed_at: string | null;
        remember_token: string | null;
        current_team_id: number | null;
        profile_photo_path: string | null;
        created_at: string | null;
        updated_at: string | null;
        notes?: Array<App.Models.Note> | null;
        notes_count?: number | null;
        readonly profile_photo_url?: any;
    }

    export interface Membership {
        id: number;
        team_id: number;
        user_id: number;
        role: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface TeamInvitation {
        id: number;
        team_id: number;
        email: string;
        role: string | null;
        created_at: string | null;
        updated_at: string | null;
        team?: App.Models.Team | null;
    }

    export interface Team {
        id: number;
        user_id: number;
        name: string;
        personal_team: boolean;
        created_at: string | null;
        updated_at: string | null;
        owner?: App.Models.User | null;
        users?: Array<App.Models.User> | null;
        team_invitations?: Array<App.Models.TeamInvitation> | null;
        users_count?: number | null;
        team_invitations_count?: number | null;
    }

    export interface Note {
        id: number;
        title: string;
        content: string;
        created_at: string | null;
        updated_at: string | null;
        user_id: number;
        user?: App.Models.User | null;
    }

}
