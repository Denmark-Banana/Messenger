import React from "react";
import ListPresenter from "./ListPresenter";
import api from "api";

export default class extends React.Component {
  state = {
    allChats: [],
    error: '',
    loading: true,
  };

  async componentDidMount() {
    try {
      const { allChats } = await api.allChatsInfo();
      this.setState({
        allChats,
      });
    } catch {
      this.setState({
        error: "Can't find chat information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { allChats, error, loading } = this.state;
    return <ListPresenter allChats={allChats} error={error} loading={loading} />;
  }
}
