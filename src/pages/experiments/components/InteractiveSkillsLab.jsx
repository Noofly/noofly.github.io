import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import ReactSkill from './skills/ReactSkill';
import CssSkill from './skills/CssSkill';
import CodeSkill from './skills/CodeSkill';

const InteractiveSkillsLab = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState('react');

  const skillsData = {
    react: {
      name: 'React',
      icon: 'Atom',
      component: ReactSkill,
      docUrl: 'https://react.dev/',
      description:
        currentLanguage === 'en'
          ? 'An interactive React component with state management. Change the values and see the component and its state update in real-time.'
          : "Un composant React interactif avec gestion d'état. Modifiez les valeurs et voyez le composant et son état se mettre à jour en temps réel.",
    },
    css: {
      name: 'CSS',
      icon: 'Paintbrush',
      component: CssSkill,
      docUrl: 'https://tailwindcss.com/docs',
      description:
        currentLanguage === 'en'
          ? 'Experiment with CSS properties to create live animations. The code updates as you adjust the controls.'
          : 'Expérimentez avec les propriétés CSS pour créer des animations en direct. Le code se met à jour lorsque vous ajustez les contrôles.',
    },
    javascript: {
      name: 'JavaScript',
      icon: 'Braces',
      component: CodeSkill,
      docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      language: 'javascript',
      description:
        currentLanguage === 'en'
          ? 'Leveraging modern JavaScript (ES6+) for complex logic and asynchronous operations, like fetching data from an API.'
          : 'Utiliser JavaScript moderne (ES6+) pour la logique complexe et les opérations asynchrones, comme la récupération de données depuis une API.',
      code: `const fetchData = async () => {
  try {
    const response = await fetch('https://api.ambroise-gyre.com/info');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};`,
      output: `> Fetching data...
> Data received: { id: 1, user: "Ambroise", age: 23, job: "Ingénieur en Informatique" }`,
    },
    python: {
      name: 'Python',
      icon: 'Code',
      component: CodeSkill,
      docUrl: 'https://docs.python.org/3/',
      language: 'python',
      description:
        currentLanguage === 'en'
          ? 'Using the pandas library to analyze a sample dataset. This example shows data manipulation and basic analysis within a standard Python script structure.'
          : "Utilisation de la bibliothèque pandas pour analyser un jeu de données. Cet exemple montre la manipulation de données et une analyse de base dans une structure de script Python standard.",
      code: `import pandas as pd

def analyze_project_data():
    """Analyzes a sample DataFrame of project data."""
    data = {
        'project_name': ['Portfolio V1', 'Data Visualizer', 'API for Devs'],
        'developer': ['Ambroise', 'Ambroise', 'Ambroise'],
        'completion_days': [20, 35, 15],
        'client_rating': [4.8, 4.9, 4.7]
    }
    df = pd.DataFrame(data)
    
    avg_rating = df['client_rating'].mean()
    print(f"Projects by {df['developer'][0]}:")
    print(df[['project_name', 'client_rating']])
    print(f"\\nAverage client rating: {avg_rating:.2f}")

if __name__ == "__main__":
    analyze_project_data()`,
      output: `> Running script...
Projects by Ambroise:
      project_name  client_rating
0     Portfolio V1            4.8
1  Data Visualizer            4.9
2     API for Devs            4.7

Average client rating: 4.80`,
    },
    java: {
      name: 'Java',
      icon: 'Coffee',
      component: CodeSkill,
      docUrl: 'https://docs.oracle.com/en/java/javase/24/docs/api/index.html',
      language: 'java',
      description:
        currentLanguage === 'en'
          ? 'Demonstrating modern Java features like Records and the Stream API to filter and process a collection of objects.'
          : "Démonstration de fonctionnalités Java modernes comme les Records et l'API Stream pour filtrer et traiter une collection d'objets.",
      code: `import java.util.List;

record Employee(String name, int id, String department) {}

public class StreamDemo {
    public static void main(String[] args) {
        List<Employee> employees = List.of(
            new Employee("Ambroise", 1, "Engineering"),
            new Employee("Bob", 2, "Marketing"),
            new Employee("Charlie", 3, "Engineering")
        );

        System.out.println("Engineering Department:");
        employees.stream()
            .filter(e -> "Engineering".equals(e.department()))
            .map(Employee::name)
            .forEach(System.out::println);
    }
}`,
      output: `> Compiling & running...
Engineering Department:
Ambroise
Charlie`,
    },
  };

  const tabs = Object.keys(skillsData);
  const currentSkillData = skillsData[activeTab];
  const SkillComponent = currentSkillData.component;

  return (
    <div className="bg-white rounded-2xl shadow-elevated border border-secondary-200">
      <div className="flex border-b border-secondary-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 p-4 text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2 ${
              activeTab === tab
                ? 'bg-primary-50 text-primary border-b-2 border-primary'
                : 'text-text-secondary hover:bg-secondary-100'
            }`}
          >
            <Icon name={skillsData[tab].icon} size={16} />
            <span>{skillsData[tab].name}</span>
          </button>
        ))}
      </div>
      <div className="p-6 md:p-8">
        <SkillComponent skill={currentSkillData} currentLanguage={currentLanguage} />
      </div>
    </div>
  );
};

export default InteractiveSkillsLab;