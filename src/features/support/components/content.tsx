import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Content() {
  return (
    <div className="text-justify">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Administrar mi perfil</AccordionTrigger>
          <AccordionContent>
            En general, todos los miembros que se conecten al sistema Acase
            pueden administrar las preferencias de su perfil por medio de la
            opción configuraciones del perfil. De este modo se pueden controlar
            algunas opciones como su nombre de usuario o cambiar su contraseña.
            Las notificaciones de su agenda y las preferencias de privacidad de
            su perfil son dos cosas diferentes y tienen configuraciones
            diferentes. También puede editar el contenido personal en su agenda
            directamente sobre la agenda.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Editar / Eliminar perfil</AccordionTrigger>

          <AccordionContent>
            <span>
              Haz clic en el icono de <strong>Usuario</strong> en la parte
              superior derecha de tu página de inicio del sistema Acase y, a
              continuación, haz clic en <strong>Ver perfil</strong>.
            </span>

            <ul className="mt-2 list-disc space-y-2 [&>li]:ml-4">
              <li>
                Para editar tu perfil: Haz clic en la opción{" "}
                <strong>Editar</strong> que está junto a la sección que deseas
                modificar. Realiza cambios en los campos proporcionados. Haz
                clic en <strong>Guardar</strong>.
              </li>

              <li>
                Para eliminar tu perfil: Ingresa a{" "}
                <strong> Configuraciones</strong> de la cuenta y Haz clic sobre
                la opción de <strong>Eliminar Cuenta</strong>. Se te pedirá que
                ingreses la contraseña de tu cuenta por seguridad.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Consejos de seguridad</AccordionTrigger>

          <AccordionContent>
            <span>
              A continuación se presentan algunas recomendaciones para mantener
              tu cuenta segura:
            </span>

            <ul className="mt-2 list-disc space-y-2 [&>li]:ml-4">
              <li>
                Usa una contraseña segura. La contraseña debe ser única para
                cada cuenta. Debe tener una combinación de caracteres entre
                letras y números, puede contener caracteres especiales.
                Contendrá al menos 6 o más caracteres, una letra mayúscula, una
                letra minúscula, un número. La contraseña no debería de contener
                nombre, número de teléfono o dirección de correo electrónico.
              </li>

              <li>
                Mantén tus contraseñas seguras y privadas asegurándote de que
                ninguna otra persona tenga acceso a ellas. Considera utilizar un
                gestor de contraseñas.
              </li>

              <li>
                No dejes tu cuenta abierta en un equipo que no sea de confianza.
                La recomendación es que cierres sesión una vez que termines de
                consultar tu cuenta
              </li>

              <li>
                Verifica la dirección de email asociada a tu cuenta del sistema
                Acase.
              </li>

              <li>
                Denuncia si tienes problemas de seguridad, nuestro equipo de
                soporte podrá proporcionarte ayuda en caso de tener problemas
                con tu cuenta.
              </li>

              <li>Mantén actualizado tu programa de antivirus.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Manejo de notificaciones</AccordionTrigger>
          <AccordionContent>
            Puedes recibir notificaciones una vez qu actives la opción para
            empezar a recibir recordatorios de tus actividades pendientes. Para
            activar esta opción, debes dirigirte a la opción de
            perfil/notificaciones y podrás seleccionar o descartar las
            notificaciones que desees recibir.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
