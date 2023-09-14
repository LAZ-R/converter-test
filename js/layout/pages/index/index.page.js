import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    const calculate = () => {
        const errorArea = document.getElementById('errorArea');
        errorArea.innerHTML = '';
        const grammesValue = document.getElementById('grammesInput').value;
        const prixValue = document.getElementById('prixInput').value;
        const prixParGrammeValue = document.getElementById('prixParGrammeInput').value;

        const isGrammesNull = grammesValue === '' || grammesValue == 0 || grammesValue == null;
        const isPrixNull = prixValue === '' || prixValue == 0 || prixValue == null;
        const isPrixParGrammeNull = prixParGrammeValue === '' || prixParGrammeValue == 0 || prixParGrammeValue == null;
        
        if ((isGrammesNull && isPrixNull) || (isPrixNull && isPrixParGrammeNull) || (isPrixParGrammeNull && isGrammesNull)) {
            errorArea.innerHTML = '<span>ERREUR</span><span>Calcul impossible, deux valeurs minimum doivent être renseignées</span>';
        } else if (!isGrammesNull && !isPrixNull && !isPrixParGrammeNull) {
            errorArea.innerHTML = '<span>ERREUR</span><span>Calcul impossible, deux valeurs maximum doivent être renseignées</span>';
        } else {
            if (isGrammesNull) {
                document.getElementById('grammesInput').value = Math.round((prixValue / prixParGrammeValue) * 100) / 100;
            }
            if (isPrixNull) {
                document.getElementById('prixInput').value = Math.round((grammesValue * prixParGrammeValue) * 100) / 100;
            }
            if (isPrixParGrammeNull) {
                document.getElementById('prixParGrammeInput').value = Math.round((prixValue / grammesValue) * 100) / 100;
            }
        }
    }
    window.calculate = calculate;

    const clear = () => {
        document.getElementById('errorArea').innerHTML = '';
        document.getElementById('grammesInput').value = '';
        document.getElementById('prixInput').value = '';
        document.getElementById('prixParGrammeInput').value = '';
    }
    window.clear = clear;

    /* --------------------------------------------------------------------- */
    const pageTitle = LAZR.APP_DATA.getAppName();
    LAZR.DOM.setHTMLTitle(pageTitle);

    const page = LAZR.DOM.createElement(
        'div', 
        'indexPage', 
        'page', 
        ``
    );



    /* ------------------------------ INPUTS AREA ------------------------------ */
    const inputs_div = LAZR.DOM.createElement(
        'div',
        'inputsDiv',
        'inputs-div',
        ''
    );
    /* ----------------------------- GRAMMES  -----------------------------*/
    const grammes_input_div = LAZR.DOM.createElement(
            'div',
            'grammesInputDiv',
            'input-div grammes-div',
            '<label class="input-label">g</label>'
        );
    const grammes_input = LAZR.DOM.createElement(
            'input',
            'grammesInput',
            'text-input grammes-input',
            ''
        );
    grammes_input.type = 'number';
    grammes_input_div.appendChild(grammes_input);

    inputs_div.appendChild(grammes_input_div);

    /* ----------------------------- PRIX  -----------------------------*/

    const prix_input_div = LAZR.DOM.createElement(
        'div',
        'prixInputDiv',
        'input-div prix-div',
        '<label class="input-label">€</label>'
    );
    const prix_input = LAZR.DOM.createElement(
        'input',
        'prixInput',
        'text-input prix-input',
        ''
    );
    prix_input.type = 'number';
    prix_input_div.appendChild(prix_input);

    inputs_div.appendChild(prix_input_div);

    /* ----------------------------- PRIX  -----------------------------*/

    const prix_par_gramme_input_div = LAZR.DOM.createElement(
        'div',
        'prixParGrammeInputDiv',
        'input-div prix-par-gramme-div',
        '<label class="input-label">€/g</label>'
    );
    const prix_par_gramme_input = LAZR.DOM.createElement(
        'input',
        'prixParGrammeInput',
        'text-input prix-par-gramme-input',
        ''
    );
    prix_par_gramme_input.type = 'number';
    prix_par_gramme_input_div.appendChild(prix_par_gramme_input);

    inputs_div.appendChild(prix_par_gramme_input_div);

    page.appendChild(inputs_div);

    /* -------------------------------- BUTTONS AREA -------------------------------- */
    const buttonsArea = LAZR.DOM.createElement(
        'div',
        'buttonsArea',
        'buttons-area',
        ''
    );

    const calculateButton = LAZR.DOM.createElement(
        'button',
        'calculateButton',
        'calculate-button',
        'Calculer'
    );
    calculateButton.addEventListener('click', calculate);
    buttonsArea.appendChild(calculateButton);

    const clearButton = LAZR.DOM.createElement(
        'button',
        'clearButton',
        'clear-button',
        'Effacer'
    );
    clearButton.addEventListener('click', clear);
    buttonsArea.appendChild(clearButton);

    page.appendChild(buttonsArea);


    /* -------------------------------- ERROR AREA -------------------------------- */

    const errorArea = LAZR.DOM.createElement(
        'div',
        'errorArea',
        'error-area',
        ''
    );
    page.appendChild(errorArea);
    
    page.style.padding = '0px var(--horizontal-padding)';
    /* --------------------------------------------------------------------- */
    
    return page;
}
