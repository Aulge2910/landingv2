
export const Container = ({children}:{children:React.ReactNode}) => {
    return (
      <section className="grid grid-cols-12 min-w-screen min-h-screen ">
        {children}
      </section>
    );
}
 