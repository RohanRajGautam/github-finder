import React, { useContext } from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

const Repos = ({ repos }) => {
  const githubContext = useContext(GithubContext);

  return repos.map((repo) => <RepoItem repo={repo} key={repo} />);
};

export default Repos;
