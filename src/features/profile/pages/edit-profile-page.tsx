import { Main } from "@/components/ui/main";
import { GeneralForm } from "../components/general-form";
import { TextSeparator } from "@/features/auth/components/text-separator";
import { PasswordUpdate } from "../components/password-update";
import { DeleteAccount } from "../components/delete-account";
import { NotificationsForm } from "../components/notifications-form";

export function EditProfilePage() {
  return (
    <Main className="flex flex-col items-center space-y-4 px-6 py-12">
      <div className="w-full max-w-lg space-y-8">
        <h1 className="text-3xl font-semibold md:text-left">General</h1>

        <GeneralForm />

        <TextSeparator> </TextSeparator>

        <h1 className="text-3xl font-semibold md:text-left">Seguridad</h1>

        <PasswordUpdate />

        <TextSeparator> </TextSeparator>

        <h1 className="text-3xl font-semibold md:text-left">Notificaciones</h1>

        <NotificationsForm />

        <TextSeparator> </TextSeparator>

        <h1 className="text-3xl font-semibold md:text-left">Eliminar cuenta</h1>
        <DeleteAccount />
      </div>
    </Main>
  );
}
