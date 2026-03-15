interface CardProps {
    title:string,
    children:React.ReactNode,
}
export const Card = ({title,children}: CardProps) => {
  return (
    <div className="col-span-12 bg-amber-500 flex flex-col items-start justify-start p-4 md:p-10 lg:p-20 w-full h-full">
      <span className="text-4xl xl:text-8xl font-bold">{title}</span>
      <div className="h-8" />
      <div className="w-full  ">{children}</div>
    </div>
  );
};

export default Card;
