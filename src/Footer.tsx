import { Component } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IFooterProps { }
interface IFooterState { year: number }

const startYear: number = 2024

export class Footer extends Component<IFooterProps, IFooterState> {
  constructor(props: IFooterProps) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
    };
  }
  render() {
    return (
      <div className="app-footer">
        <nav className="bp3-navbar">
          
          <div className="footer-content">
          <div className="bp3-align-left footer-logos">
              <a href="https://www.wingardhs.se/">
                <img className="bp3-align-right footer-logo" src="wingardhs_logo.png" alt="Wingårdhs Logo" />
              </a>
              <a href="https://www.krookochtjader.se/">
                <img className="bp3-align-right footer-logo" src="krook_logo.png" alt="Krook & Tjäder Logo" />
              </a>
              <a href="https://sb.chalmers.se/">
                <img className="bp3-align-right footer-logo" src="chalmers_logo_blk.png" alt="Chalmers Logo" />
              </a>
            </div>
            {/*<AnchorButton icon="link" className="bp3-button bp3-minimal" href="http://annex75.iea-ebc.org/about" target="_blank">About IEA EBC Annex 75</AnchorButton>*/}
            <div className="bp3-align-center">
              &copy; {this.state.year > startYear? `${startYear} `:  ""}{this.state.year} Reduction Roadmap Sverige
            </div>
            <div className="bp3-align-right" style={{}}>
              <a href="https://www.reductionroadmap.dk/">
                Reduction Roadmap Danmark
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}