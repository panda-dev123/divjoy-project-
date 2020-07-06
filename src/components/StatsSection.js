import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Stats from "components/Stats";

function StatsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <Stats
          items={[
            {
              title: "Tweets",
              stat: "3,456",
            },
            {
              title: "Following",
              stat: "123",
            },
            {
              title: "Followers",
              stat: "456k",
            },
            {
              title: "Likes",
              stat: "789",
            },
          ]}
        ></Stats>
      </Container>
    </Section>
  );
}

export default StatsSection;
