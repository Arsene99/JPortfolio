import { useState, useEffect } from 'react';
import { Project, Skill, Experience, INITIAL_PROJECTS, INITIAL_SKILLS, INITIAL_EXPERIENCE } from '../lib/data';

export function usePortfolioData() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio_projects');
    const savedSkills = localStorage.getItem('portfolio_skills');
    const savedExperiences = localStorage.getItem('portfolio_experiences');

    if (savedProjects) setProjects(JSON.parse(savedProjects));
    else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('portfolio_projects', JSON.stringify(INITIAL_PROJECTS));
    }

    if (savedSkills) setSkills(JSON.parse(savedSkills));
    else {
      setSkills(INITIAL_SKILLS);
      localStorage.setItem('portfolio_skills', JSON.stringify(INITIAL_SKILLS));
    }

    if (savedExperiences) setExperiences(JSON.parse(savedExperiences));
    else {
      setExperiences(INITIAL_EXPERIENCE);
      localStorage.setItem('portfolio_experiences', JSON.stringify(INITIAL_EXPERIENCE));
    }

    setLoading(false);
  }, []);

  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('portfolio_projects', JSON.stringify(newProjects));
  };

  const updateSkills = (newSkills: Skill[]) => {
    setSkills(newSkills);
    localStorage.setItem('portfolio_skills', JSON.stringify(newSkills));
  };

  const updateExperiences = (newExperiences: Experience[]) => {
    setExperiences(newExperiences);
    localStorage.setItem('portfolio_experiences', JSON.stringify(newExperiences));
  };

  return { projects, skills, experiences, loading, updateProjects, updateSkills, updateExperiences };
}
