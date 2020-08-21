/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Websites</h5>
            <a href="https://davehakkens.nl/tag/projectkamp">Follow our latest news</a>
            <a href="https://www.projectkamp.com">Go to the main site</a>

          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discord.com/invite/SSBrzeR">Discord chat</a>
            <a href="https://www.youtube.com/watch?v=R-qZBVlsq0Y&list=PLtYgsstkMPuUdB5jL78LXxu3WLmvPAmXM&index=2&t=0s">Youtube</a>
          </div>
          <div>
            <h5>More</h5>
              <a href="https://github.com/">Nha</a>
            <a href="https://github.com/">its enough for now</a>

          </div>
        </section>



      </footer>
    );
  }
}

module.exports = Footer;
