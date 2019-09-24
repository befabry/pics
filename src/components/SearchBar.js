import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    // OR we could be using binding in the constructor
    onFormSubmit = (event) => {
        event.preventDefault();

        const { term } = this.state;
        const { onSubmit } = this.props;

        onSubmit(term);
    };

    render() {
        const { term } = this.state;

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search :</label>
                        <input
                            type="text"
                            value={term}
                            onChange={(e) => {
                                this.setState({ term: e.target.value });
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
