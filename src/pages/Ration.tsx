import Meal from "../components/Meal";

export default function Ration(){
    return(
        <>
            <div className="w-100">
                <h1 className=" justify-content-center align-content-center fw-bold">Рацион питания</h1>
                <Meal eatingName="Завтрак" mealName="Яичница" mealWeight={100} mealCallories={480} mealProtein={10} mealFats={20} mealCarbohydrates={70}></Meal>
                <Meal eatingName="Обед" mealName="Макароны по флотски" mealWeight={300} mealCallories={886} mealProtein={36} mealFats={44} mealCarbohydrates={84}></Meal>
                <Meal eatingName="Ужин" mealName="Суп куриный" mealWeight={400} mealCallories={350} mealProtein={25} mealFats={12} mealCarbohydrates={34}></Meal>
            </div>
        </>
    )
}