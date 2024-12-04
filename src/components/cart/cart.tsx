export default function Cart() {
  return (
    <div className="modalContainer">
      <h1>Cart Items</h1>

      <div className="flex flex-col justify-start w-32">
        <h2>Your items</h2>

        <ul>
          <li className="flex flex-row justify-between">
            <p>item</p>

            <div className="flex flex-row">
              <span>number of item</span>
              <span>x</span>
              <span>cost </span>
            </div>

            <div className="flex flex-row gap-2">
              <button>+</button>
              <button>-</button>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}