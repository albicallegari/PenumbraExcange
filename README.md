## Tasks Description
The goal is to see if the Frontend Developer is comfortable working on a blockchain explorer project and has all the necessary qualities to fully lead the project. To be objective, this project simulates a limited version of a real project that PK Labs has been working on for Penumbra blockchain (https://penumbra.zone/). The project requires the ability to create UI components from scratch and collaborate with designers and other developers on maintaining the UI library.

The goal is to create a layout for the Penumbra Explorer homepage.
- Figma design: https://www.figma.com/design/jHvHTIHcEyCni0aohFGwbA/Noctis-%E2%80%93-Block-Explorer-(PK-Labs)?node-id=8033-32578&t=Q2PmcAwUCRIXJM5c-1
- Use Next.js
- A responsive layout is not needed as it has not been implemented by the designer.
- Backend integration is not needed, use dummy data.

Acceptance criteria:
- An MVP of the frontend application with dummy data rendering the homepage of the Penumbra Explorer according to the design.
- Provide a GitHub repo with simple commands so anyone can run locally and test.

# Starting the application after downloading from GitHub

Node.js version "^18.18.0 || ^19.8.0 || >= 20.0.0" is required.

1. **Clone the repository**: Open the terminal and clone the GitHub repository using the command:
    ```sh
    git clone <repository-URL>
    ```
    Replace `<repository-URL>` with the actual URL of the GitHub repository.

2. **Navigate to the project directory**: Move to the newly cloned project directory:
    ```sh
    cd <directory-name>
    ```
    Replace `<directory-name>` with the name of the project directory.

3. **Install dependencies**: Install all necessary dependencies for the application. If using `npm`, run:
    ```sh
    npm install
    ```
    If using `yarn`, run:
    ```sh
    yarn install
    ```

4. **Configure environment variables**: Create a `.env` file in the main directory of the project and add the necessary environment variables. Refer to the project documentation for details on the required variables.

5. **Start the application**: Run the command to start the application. If using `npm`, run:
    ```sh
    npm run dev
    ```
    If using `yarn`, run:
    ```sh
    yarn dev
    ```

6. **Access the application**: Open a web browser and navigate to the address indicated in the terminal (usually `http://localhost:3000`).

By following these steps, the application should start correctly and be ready for use.
