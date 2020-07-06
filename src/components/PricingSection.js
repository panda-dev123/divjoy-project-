import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Pricing from "components/Pricing";

function PricingSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <Pricing
          buttonText="Choose"
          items={[
            {
              id: "starter",
              name: "Starter",
              price: "10",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
              ],
            },
            {
              id: "pro",
              name: "Pro",
              price: "20",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
                "Faucibus porta lacus fringilla vel",
                "Aenean sit amet erat nunc",
              ],
            },
            {
              id: "business",
              name: "Business",
              price: "50",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
                "Faucibus porta lacus fringilla vel",
                "Aenean sit amet erat nunc",
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
              ],
            },
          ]}
        ></Pricing>
      </Container>
    </Section>
  );
}

export default PricingSection;
