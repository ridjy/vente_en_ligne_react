import { plantList } from '../datas/plantList.js'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'> 
                        {plant.name} {plant.isBestSale ? <span>🔥</span> : null}
                        {plant.promotion && <div className='lmj-sales'>Soldes</div>} 
                    </li>
				))}
			</ul>
		</div>
	)
}//fin ShoppingList

export default ShoppingList