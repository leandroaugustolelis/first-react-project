import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import gitHubLogo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={gitHubLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/76403096?s=460&u=d40ec7b740901f669366db69f2c93bead79c6ea5&v=4"
            alt="Leandro Lelis"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy high scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/76403096?s=460&u=d40ec7b740901f669366db69f2c93bead79c6ea5&v=4"
            alt="Leandro Lelis"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy high scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/76403096?s=460&u=d40ec7b740901f669366db69f2c93bead79c6ea5&v=4"
            alt="Leandro Lelis"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy high scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
