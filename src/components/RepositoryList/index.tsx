import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';

const RepositoryList: React.FC = () => {
  const repositories: Array<Repository> = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );
  const loading: boolean = useSelector((state: ApplicationState) => state.repositories.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RepositoriesActions.loadRequest());
  }, [dispatch]);

  if (loading) {
    return <h1> Loading... </h1>;
  }

  return (
    <ul>
      {repositories.map((repository) => (
        <RepositoryItem repository={repository} key={repository.id} />
      ))}
    </ul>
  );
};

export default RepositoryList;
