import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { AudioWaveform } from "lucide-react";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex gap-2 p-2">
          <div className="flex size-6 items-center justify-center rounded-sm border">
            <AudioWaveform className="size-4 shrink-0" />
          </div>
          <h1 className="font-semibold">School0gy</h1>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
