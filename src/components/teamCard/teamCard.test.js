import { render, screen } from '@testing-library/react';
import { TeamCard } from "./teamCard"

describe("teamCard",()=>{
    it("should render team card",()=>{
        const {getByTestId} = render (<TeamCard/>);
        const teamCard = getByTestId("Team-Card");
        expect(teamCard).toBeDefined();
    })

    it("should render front img on card",()=>{
        const {getByTestId} = render (<TeamCard/>);
        const FrontImg = getByTestId("FrontImg");
        expect(FrontImg).toBeDefined();
    })
    it("should render front img on card",()=>{
        const {getByTestId} = render (<TeamCard/>);
        const BackImg = getByTestId("BackImg");
        expect(BackImg).toBeDefined();
    })
})