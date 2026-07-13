import {
  BarChart3,
  ClipboardList,
  Code2,
  HelpCircle,
  LayoutDashboard,
  Settings,
} from "lucide-react";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

  SidebarRail,

} from "@/components/ui/sidebar";
import Link from "next/link";


type NavItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  isActive?: boolean;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

type SidebarData = {
  logo: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  navGroups: NavGroup[];
  footerGroup: NavGroup;
};

const sidebarData: SidebarData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Shadcnblocks",
    title: "Shadcnblocks",
    description: "Build your app",
  },
  navGroups: [

    {
      title: "",
      items: [
        {
          label: "Home",
          icon: LayoutDashboard,
          href: "/admin",
          isActive: true,
        },
        {
          label: "Create Profile",
          icon: LayoutDashboard,
          href: "/admin/profile",
          isActive: true,
        },
        {
          label: "Create Project",
          icon: LayoutDashboard,
          href: "/admin/project",
          isActive: true,
        },
        {
          label: "View Project",
          icon: LayoutDashboard,
          href: "/admin/view_project",
          isActive: true,
        },
        {
          label: "About",
          icon: LayoutDashboard,
          href: "/admin/about",
          isActive: true,
        },
     
       
 
  
      ],
    },
  ],
  footerGroup: {
    title: "Support",
    items: [
      { label: "Help Center", icon: HelpCircle, href: "#" },
      { label: "Settings", icon: Settings, href: "#" },
    ],
  },
};

const SidebarLogo = ({ logo }: { logo: SidebarData["logo"] }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="  flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Code2 className="h-5 w-5" />
          </div>

          <span className="hidden text-lg font-bold font-mono sm:block">
            Shamiul
          </span>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo logo={sidebarData.logo} />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton isActive={item.isActive} render={<Link href={item.href} />}
                    >{item.label}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>{sidebarData.footerGroup.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarData.footerGroup.items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton render={<Link href={item.href} />}>{item.label}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};





