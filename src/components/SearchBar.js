// // import React, { Component } from "react";
// // import _ from "lodash";
// // import { Search } from "semantic-ui-react";
// // //this component is from semantic-search-standard

// // export default class SearchBar extends Component {
// //   componentWillMount() {
// //     this.resetComponent();
// //   }

// //   resetComponent = () =>
// //     this.setState({
// //       isLoading: false,
// //       results: [],
// //       value: ""
// //     });

// //   handleSearchChange = (e, { value }) => {
// //     this.setState({ isLoading: true, value });

// //     setTimeout(() => {
// //       if (this.state.value.length < 1) return this.resetComponent();

// //       const re = new RegExp(_.escapeRegExp(this.state.value), "i");
// //       const isMatch = result => re.test(result.name);

// //       this.setState({
// //         isLoading: false,
// //         results: _.filter(this.props.pokemons, isMatch)
// //       });

// //       this.props.searchPoke(this.state.results);
// //     }, 300);
// //   };

// //   render() {
// //     const { isLoading } = this.state;
// //     return (
// //       <Search
// //         loading={isLoading}
// //         onSearchChange={_.debounce(this.handleSearchChange, 500, {
// //           leading: true
// //         })}
// //       />
// //     );
// //   }
// // }

// import _ from "lodash";
// import React, { Component } from "react";
// import { Search, Grid, Header, Segment } from "semantic-ui-react";

// const source = this.props.pokemons;

// export default class SearchBar extends Component {
//   componentWillMount() {
//     this.resetComponent();
//   }

//   resetComponent = () =>
//     this.setState({ isLoading: false, results: [], value: "" });

//   handleResultSelect = (e, { result }) =>
//     this.setState({ value: result.title });

//   handleSearchChange = (e, { value }) => {
//     this.setState({ isLoading: true, value });

//     setTimeout(() => {
//       if (this.state.value.length < 1) return this.resetComponent();

//       const re = new RegExp(_.escapeRegExp(this.state.value), "i");
//       const isMatch = result => re.test(result.title);

//       this.setState({
//         isLoading: false,
//         results: _.filter(source, isMatch)
//       });
//     }, 300);
//   };

//   render() {
//     const { isLoading, value, results } = this.state;

//     return (
//       <Grid>
//         <Grid.Column width={6}>
//           <Search
//             loading={isLoading}
//             onResultSelect={this.handleResultSelect}
//             onSearchChange={_.debounce(this.handleSearchChange, 500, {
//               leading: true
//             })}
//             results={results}
//             value={value}
//             {...this.props}
//           />
//         </Grid.Column>
//         <Grid.Column width={10}>
//           <Segment>
//             <Header>State</Header>
//             <pre style={{ overflowX: "auto" }}>
//               {JSON.stringify(this.state, null, 2)}
//             </pre>
//             <Header>Options</Header>
//             <pre style={{ overflowX: "auto" }}>
//               {JSON.stringify(source, null, 2)}
//             </pre>
//           </Segment>
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }
