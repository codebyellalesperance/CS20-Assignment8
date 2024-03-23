function fetchData() {
    fetch('https://api.spoonacular.com/mealplanner/generate?apiKey=7c7f3534ec1e4636b081d4a9332f9a35')
        .then(response => response.json())
        .then(data => {
            const weekData = data.week;
            const apiDataContainer = document.getElementById('apiData'); 
            const weeklyPlanContainer = document.createElement('div');

            for (const day in weekData) {
                const dayData = weekData[day];
                const daySection = document.createElement('div');
                const dayHeading = document.createElement('h2');
                dayHeading.textContent = day.charAt(0).toUpperCase() + day.slice(1);
                daySection.appendChild(dayHeading);

                const mealsContainer = document.createElement('div');
                for (const meal of dayData.meals) {
                    const mealContainer = document.createElement('div');
                    const mealTitle = document.createElement('h3');
                    mealTitle.textContent = meal.title;

                    const mealDetails = document.createElement('p');
                    mealDetails.textContent = `Ready in ${meal.readyInMinutes} minutes | Servings: ${meal.servings}`;

                    const recipeLink = document.createElement('a');
                    recipeLink.href = meal.sourceUrl;
                    recipeLink.textContent = "View Recipe";
                    recipeLink.target = "_blank";
                    recipeLink.style.display = "block"; 

                    mealContainer.appendChild(mealTitle);
                    mealContainer.appendChild(mealDetails);
                    mealContainer.appendChild(recipeLink); 
                    mealsContainer.appendChild(mealContainer);
                }
                daySection.appendChild(mealsContainer);
                weeklyPlanContainer.appendChild(daySection);
            }

            apiDataContainer.appendChild(weeklyPlanContainer);
        });
}

fetchData();

