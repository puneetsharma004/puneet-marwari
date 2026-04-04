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
  const id = params.id;
  const member = teamMembers.find((item) => item.id === id) || teamMembers[0];

  return (
    <>
      <HeroBanner
        title={member.heroTitle}
        description={member.heroDescription}
        imageSrc={member.heroImage}
      />

      <TeamSingle member={member} />
    </>
  );
}
