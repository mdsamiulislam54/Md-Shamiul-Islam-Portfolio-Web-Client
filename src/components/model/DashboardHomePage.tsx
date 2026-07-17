

import { IDashboardOverview } from "@/app/(dashboardLayout)/admin/profile/_action";
import {
  FolderKanban,
  Star,
  Code2,
  Mail,
  Bell,
} from "lucide-react";
import {GitHubCalendar,} from "react-github-calendar";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IDashboardPageProps {
  dashboard: IDashboardOverview;
}

const DashboardHomePage = ({ dashboard }: IDashboardPageProps) => {
  const cards = [
    {
      title: "Total Projects",
      value: dashboard.totalProjects,
      icon: FolderKanban,
    },
    {
      title: "Featured Projects",
      value: dashboard.featuredProjects,
      icon: Star,
    },
    {
      title: "Total Skills",
      value: dashboard.totalSkills,
      icon: Code2,
    },
    {
      title: "Total Messages",
      value: dashboard.totalMessages,
      icon: Mail,
    },
    {
      title: "Unread Messages",
      value: dashboard.unreadMessages,
      icon: Bell,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>

                <Icon className="h-5 w-5 text-primary" />
              </CardHeader>

              <CardContent>
                <h2 className="text-3xl font-bold">{item.value}</h2>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* GitHub Activity */}
      <Card>
        <CardHeader>
          <CardTitle>GitHub Activity</CardTitle>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          <GitHubCalendar
            username="mdsamiulislam54"
            colorScheme="dark"
            fontSize={14}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHomePage;