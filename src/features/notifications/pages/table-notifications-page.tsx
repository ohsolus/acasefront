import { Main } from "@/components/ui/main";

import NotificationsTable from "../components/notifications";

export default function Notifications() {
  return (
    <Main className="bg-cover bg-center h-screen">
      <div className="flex p-4 justify-center py-7"></div>

      <div className="justify-center flex p-2">
        <div className="w-2/3">
          {/*<Card className="shadow-lg rounded-lg bg-white/30 backdrop-blur-md border border-white/40 rounded-lg p-6 shadow-lg">
            <CardContent className="items-center p-4">
             */}{" "}
          <NotificationsTable />
          {/*</CardContent>
          </Card>*/}
        </div>
      </div>
    </Main>
  );
}
