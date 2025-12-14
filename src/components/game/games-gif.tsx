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
				<p>{description}</p>
			</div>
		</div>
	);
};


export { GameGif };
