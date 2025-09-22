import "../../styles/gif.css";
interface GameGifProps {
	title: string;
	description: string;
	reverse: boolean;
	image?: string;
}

const GameGif = ({ title, description, reverse }: GameGifProps) => {
	return (
		<div className={reverse ? "giffy-reverse" : "giffy"}>
			<div className="giffy-child-two">
				<h1>{title}</h1>
				<BulletList points={description}></BulletList>
			</div>
		</div>
	);
};

interface BulletListProps {
	points: string;
}

const BulletList = ({ points }: BulletListProps) => {
	const items = points.split("\n");
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</ul>
	);
};

export { GameGif };
