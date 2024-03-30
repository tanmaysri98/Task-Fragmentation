# Task-Fragmentation
AN assignment to test the fragmentation ability of Developers

My Pick - Fragmentation of Functinality / UI -

A brief description of the components utilised throughout the code snippet. 

BurnHeader: This component encapsulates the header section of the burn page, including the title, description, and burn button bar. Separating this into its own component improves readability and maintainability, especially if there are future changes to the header.

BurnStats: This component handles the display of token supply statistics, such as burnt tokens, circulating tokens, and other relevant information. It contains subcomponents for each statistic, promoting modularity and reusability.

TransactionTable: This component renders the table displaying burn transactions. It receives data as props and handles the presentation of transaction details. Separating this logic into its own component improves code organization and readability.

ChainSelector: This component allows users to switch between different token chains. It encapsulates the functionality related to chain selection, including handling user interactions and updating the selected chain state.

AppToast: This component is responsible for displaying toast notifications at the bottom center of the page. It handles the rendering of toast messages based on the severity level and position specified as props.

## My Reasons for Fragmentating it like that

The above way of fragmentation would preferrably make the code more modular and scalable overall, providing re-usability of components from time to time without the hassle of creating one every single time within the page or the App component of React.


