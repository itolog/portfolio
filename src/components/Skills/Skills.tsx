import useSkillsRouting from "@/hooks/useSkillsRouting.tsx";

import Cloud from "@/components/Cloud/Cloud.tsx";
import Frame from "@/components/Frame/Frame.tsx";

const words = [
	"JavaScript",
	"HTML5",
	"SCSS",
	"React",
	"Typescript",
	"Apollo GraphQL",
	"Redux",
	"Next.js",
	"Material UI",
	"SurveyJS",
	"Vue",
];
const Skills = () => {
	useSkillsRouting();

	return (
		<Frame id="skills" title={"Skills"} rotation={[0, 4.7, 0]} position={[-45, -15.5, 65]}>
			<group rotation={[10, 10.5, 10]}>
				<Cloud words={words} radius={20} />
			</group>
		</Frame>
	);
};

export default Skills;
