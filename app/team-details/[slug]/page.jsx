import React from "react";
import HeroBanner from "@/components/common/HeroBanner";
import TeamSingle from "@/components/teamSingle/TeamSingle";
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "Team-Details || Mawari",
  description: "Mawari - Luxury Gay Travel",
};

export default async function page(props) {
  const params = await props.params;
  const slug = params.slug;
  const member =
    teamMembers.find((item) => item.slug === slug) || teamMembers[0];

  return (
    <>
      <HeroBanner title={`Meet: ${member.name}`} imageSrc={member.heroImage} />

      <TeamSingle member={member} />
    </>
  );
}
