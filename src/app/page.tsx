import NavLink from "@/components/header/nav-link";

export default function Home() {
  return (
    <>
      <main>
        <h2>Your Pokémon Card Shop</h2>

        <section className="mt-4">
          <h3 className="text-center my-4" >Welcome to the Pokemon Card Shop!</h3>

          <p>
            Feel free to shop around and add to your Pokémon card collection! At the moment, we have all cards from Sword and Shield avaiable for purchase.
          </p>

          <div className="flex flex-row justify-center mt-10">
            <NavLink href='/shop' isButton={true} >Start Shopping</NavLink>
          </div>
        </section>
      </main>
    </>
  );
}
