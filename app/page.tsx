import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" min-h-dvh">
      <div className="text-9xl font-bold tracking-tighter text-coolors-emerald-300">
        Socialize.
      </div>
      <div className="ml-12 text-2xl text-coolors-charcoal-200">
        Optimize your social life.
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0  mt-12">
        <div className="grid auto-rows-min gap-12 md:grid-cols-3 align-middle text-4xl text-coolors-charcoal-300">
          <Card className=" grid h-48 text-center content-center bg-coolors-emerald-900">
            Reminders
          </Card>
          <Card className=" grid h-48 text-center content-center bg-coolors-emerald-900">
            Templates
          </Card>
          <Card className=" grid h-48 text-center content-center bg-coolors-emerald-900">
            Log Interaction
          </Card>
          <Card className=" grid h-48 text-center content-center bg-coolors-emerald-900">
            Groups
          </Card>
          <Card className=" grid h-48 text-center content-center bg-coolors-emerald-900">
            Notes
          </Card>
          <Card className=" grid h-48 text-center content-center bg-coolors-emerald-900">
            Settings
          </Card>
        </div>
      </div>
    </div>
  );
}
