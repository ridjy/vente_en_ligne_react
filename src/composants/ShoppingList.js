import { plantList } from '../datas/plantList.js'

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
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null} </li>
				))}
			</ul>
		</div>
	)
}//fin ShoppingList

export default ShoppingList