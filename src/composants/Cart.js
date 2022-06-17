import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) 
{
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

  //si panier non vide afficher la lise sinon afficher panier est vide
  var panier = cart.length > 0 ? (
    <div>
      <h2>Panier</h2>
      <ul>
        {cart.map(({ name, price, amount }, index) => (
          <div key={`${name}-${index}`}>
            {name} {price}€ x {amount}
          </div>
        ))}
      </ul>
      <h3>Total :{total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div>Votre panier est vide</div>
  );

  //seulement si total change (en 2e param)
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
  }, [total])
  //si tableau vide, exécution uniquement au 1er render

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{ panier }
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart