export interface Skill {
    name: string;
    enabled: boolean;
}

export interface SkillsData {
    skillsFront: Skill[];
    skillsBack: Skill[];
    skillsTools: Skill[];
    skillsLanguages: Skill[];
}