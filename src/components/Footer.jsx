import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import instagram from "../assets/instagram.jpg";
import eazipay from "../assets/eazipay.png";

const Footer = () => {
  return (
    <div className="first-conti">
      <div className="first-first-conti">
        <img src={eazipay} className="eazipayy" alt="eazipay" />
        <h6>
        Copyright <span><FontAwesomeIcon icon={faCopyright} className="copyright" /> </span> 2023 Eazipay.
        </h6>
        <h6>All rights reserved</h6>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEX///9eXl5OTk7AwMDR0dFbW1tSUlJVVVVYWFhLS0vi4uL6+vpzc3OhoaF4eHj29vbHx8e6urrw8PCzs7OFhYXq6urX19etra1ra2tERESOjo6np6djY2N/f3+UlJSampqQZj9mAAAFGUlEQVRoge1a2barKBB1ogCHSJxikpPk///ynlwBFRFR7Hb1avdjom4oqoqaPO/EiRMnTpz4nyOPm8gOTZzvSVywLIU7DWxB75BmrNiDOmcvhDHy1+H7you5yqC4tUBWMgsQaG9OArj6sHbXIwmAf93MHaeBA3WHII23kd+oy77l/ultA3dSwegjBIMtMBktG6pkLXl+wQNqQGmVlaEdyqxK0VBf8GWl8g/JCbmE8brlJ3F4IWQrfdKTE/rYpjfxg5Kefs3qK0lOq3oT9xd1RSV9Zf/aTSgcwuFm7i9C6STBWvNjsWTibzTW/lO+kD61/VTKF0za7VIXqFtOj1K7F67cwyHfnfyX3ud7CaycbiG13VXsHWKpwTZXjlA56qBwdVlVNyG5kNorXt52kiIrbERFiIAQIELUVXf0qF32OUxsffuhMzo+6Vpsni2++uoWSt6byQtf+nh+0g/+zdfiq8LatqtcJD0ccNWJhdUt6R3rNBRdNpN7T6nkOOM/Xbo94SXRZ3i0agOSom4YY1FTK8ok/bSPn/ynEMarmQP3c2hB8En0ef0AfONnwG1vXV80veQj/lOM7Pwd8MeMN2KdITqIXxACeumFlQhPjdpE+QnM5Pl92djjik6DbAS9M6m7IJzgXoDc5O9mi+fXm+GA8udcgA+tEHT9+mY0r8HpcXVauOia7oaBcnZ5Kei5v/vHmRB1zNiIqOzeChojexSYVZ4hY2YDlxmL5kofRPq/7divwSBU5UH2KHwmMxfZHuzhfSBl2r5vIWNhVuGADJakvR92YGd9YgXts2dJokeviSTV7d6dPUZCxsQvFdOJKxk/4sc/wZ5cxP7wSyNdJtemMxhn9lKYGtU7AxnA+WQqe1f2QtxcdM4XJD/idp7e467sH85ucIOFoJ+6NEf2nM7uq0fDNWMaGDmy3/jWzVdvxnUjUE/ekV1ckU/dWxI5l/0keHZjr7mX+1mIzLhhIPV83Nj5V8nHTO7lXPRI8Qhu7DwmpuYb8vsg0tI4sYvICC2WIK5Ye/BO7MWP/jin4MGRanNO7DU/9qWI+FdKnF0JDJ3YYx6PW2ShXOmVbGQP9vlw799gP2jv4tzNnu4vqFY/3di5wenCFuVJno4oTzqx552996nRLHjxAStScvN1Vbf5+2JB49M5RbVM4cbOc/JFtUv8DqBcxG7sPCteyG1lyQalSszrxi72FCxUH0SRQr0LHaOLj1XVKxQFLzUCcmQXlWNj8aPmoc206uMa04pcwlR0e+G583Flb2QyMWt1bxHY+JO/nHOZt0gn5koAgtyH6QPO7DJX8LHuqquF2H2sKXO657CigvvtsKk6nVx/RI45sfV92L2npCfwHvLnYdr337DuYPaoXTz6ihGhbcbiPEmK6FrhQe/vriXYpW4z7I4iAvRO6T0YNeep/vu7sHuf+XrZX4mQmc/bsS/W667EUDKD2Xa3Xb1uuVY5Xy5EkM1eAna1Sps6bQm6gYRfNTR82q5Oa1ejvrZ03GJHEFQmoVrWqG3r880nxQFg8gsM4FelObO2rc9b9yaSOio/78fj8wzjxTafbW9ih76MBrZ9mR16UlNY96RkP245cbCHdT9uj16kihW9yD36sApW9GF36UGPsKYH3fff8RH992NnDw6eu+hnTtAOMyfiPrCeOTl23ubgWaOD56yOnTE7eL7u4NlC79i5Su/gmVLv2Hla7+BZYu/YOepOAMfNkAscNj9/4sSJEydO/BfxBzrfRyYdhEALAAAAAElFTkSuQmCC"
          className="imaap"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAMAAADRsl6yAAAAVFBMVEX///+EgoSBf4F9e32hn6H19fXu7u78/Px6eHr4+Pjm5ubr6+vg4OCenZ6pqKnAwMCQj5BzcXPMzMyYl5jZ2dmJiImvr6+2tbbS0tLGxsa5urmwrbAmcM3iAAAGk0lEQVR4nO2caZekKgyGm+CClgvuy/z//3nVrkVLQJCoc+b6fJk5XV32WwGSkED9/Nzc3Nzc3Nzc3Pwv8aKoHIgewdVKRPhhm1RZlrGR4d+sSvLwr1Lq5knFKJAZQFnlpI+rlb141AALfW+dQJPQV7xzsP4pCr2GUpHAXyhzIqnC1snyMyR2XKFwUkka8TvzGChd/RR/Dj8KplY4qYRy/caOMiBsZUbPcZEl5pVwHq7mJUkXb/PLpho/G/CVoIZx1QQ2J6VaEkdT1p8xdFNOftcYXZtx+CH38BQGtcY4v2Dx5IbcKI8z9vxkEK9M1g0vQYE33PXGYvmyJG+jronJzPTZasW7xfgqECSRvpnE0anD0o3SevXQ6Pd14Di+v9edilLNgiFNn7MHOIYLKg2tuIaG66eS1wcHYm/J0FYhgCD8+NnndS74CEb4ifVIi4JgNHMU1pbMbUeazXIJ9y2mnz8WyDo6GeCK0xxtgHSvR3nln09AXI4OEJukqLczI9DnH/fLmhPmvD15/PXRWSdTsElY2UmshuXgu2EXs9FlfmJ2UHwPD633Bm871whx6JVdXcBvSKSf9b3WSGiyL+QEesmOFF5UQ4L+fMZ8OF2+fjCtdq2c3CCVEDJTQudJm0jj4Ej3pOrfM9sCtgjZ7nqsp8/hGCdrnt2KWfz1ZBGWBfPx99eMnVCOZka2lPjjSzQOkyMxyzGsE563xFVy40gfTWlnsMAD+YPMoGvbqFJSFkv3wCskE9sY5qyHr1N5jGHAddeOJ3IQ5gisOASwTP0e1uslbA9LDz4BNBU+XK1x9OipzrS0zm4niZJkYXMeDQlX7W3G8NDejFDIhkw5IZ9QUkcbKiN7jVQ6XnoGAOKo42NprRGI9OG6jg0YrSP5zETQyOUW6LSfTkmcyjym/VirNLoGyQBQUvTCerb9moFCrvGnN0r8gGZV3a5G3XKjMD44Vmh0iaENgNKqqLtobk/7OAOJQuOubfGQ1g9Kk74NPdf1/R/XOsUV1KLmhtz7/EEno8NGJKn71DqnoJL6+JPHVkBUCoVxq4TgwsWx2mq0sWEbGv3kepHrZsIXgXO5SEEn5FtkcbVIUeVxIupf+czjcpGyzKxltHn8yvSvHW55QX5IVyhJuqkLGpi2BHA1xrKkqpxehqr404aB310oEhJZFv1KBYCyjFYxXj3EXKM0zCxSAYRgsR+QunBpLeV0QF5gsu5WYAHyfXx6tVd8I994WqU8iCh3CpculA/K7DG1LWPjkKkyitB0N3MMoCrQ2fchMYBCWTW2rzAgQHuVRNSmxX42WgTRX+B+Nk9KXJqTTaj3/yP2dRBbNLq9OnXSQ8k0ytnxtaOtKuu9QekK7EevsR9eKRIqvS5QdGFuId/KfFFeZ0n9dnmI003bQaXfOw11DqgeAN104DPc+pJJmZmdzsq3TiMfgLJWL+KRZGer3Kw7ClTWlfaRXwz2HbMNU87OM6a8PqEmaJPTUiEwMqPrBaO/9/0gcN3SOUfiVqX+i5I7yYTjFPyk3SIQs8NO3nQK+skpCrebMt8YH+1GQDPj+dCeHmXYxpZVYEiss066KI4nSDl7F7u+4KHBufsaEJzb2ubcfY20s6XmzLIuUzes5ZzXgIXdt5+EB3SPYf+Z/uikKKg+PvFXiNQqTchpT4jWQPat6TcnbLVlJx31eRy99dp/KWIm0jl0qw1mybeMtjrOlNMtFAxC5d1kK6jVbaelSueYfNxwC7PBo+GAbsyNc2XmeG1dZQyzKCA8pW5N2NUF2nabqnrAVvhe2KHIlJ+QQSAqMCSiXvT+wqsZxpTEufcrpsSJjTQ+zIoeUnmXqnvUFrg5UryBQ5zOSFsgxZqsPkZi0HIk9w17S6EbeHmMspqJ7X1kucKmQssoKFYyNsMP8wKxv0Dxp2KYJpitBdlFsp34gTdW61GzRiq9paWhx//8zw9cL4zawX4Ma5U8AWJcBZ3hJs8KfeI4TlwUvAKK3jxi3G4bHdTAji3SU24/E0sHeWQXAE0wvoLFL7HiiEBhsXUlUZs2PmKYAWLMwOK2RYasEhhvsbcEkUMwfTaxXMwylU2FtHxYVeNVIb7wUsJsZyZARrtjv0ovSgrYP+ZACW/w05sVbtvwXfkOMMab8rh96ZIg6itiEnem3+X92V8/6bWNw2G7ygOD+UiRpOWBtQcFwSNqm5iMX4A577y/oJRN34mZtuH2NfyD8b0y78fE6Iu6X98cvrm5ubm5ubm5+Zf5D6rJYljq7YLZAAAAAElFTkSuQmCC"
          className="imaap"
        />
        <img
          src="data:image/png;base64,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"
          className="imaap"
        />
        
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAASFBMVEVpaWn///9lZWVhYWGSkpK+vr54eHj19fXy8vL7+/tvb2/IyMjs7OxsbGzl5eWDg4OsrKy2trbOzs6lpaXa2tqdnZ1bW1uMjIzTxCxGAAABiUlEQVRoge3bi3LCIBAFUOShCUkkr5r//9PWWo0Fk9nUBapz7wfsGSOygET0k06fqRfmJNPnZIRRIn0UXLhw4cKFy+le2pq6RSZwvzjr9MfQtt0lxpi2ie2qk67qcueljuxK0R5885xjXFfp+pEa21XDYzWyu8xGdaUOhlMStzkusjHdlacc1135uBFd6VbYiK5qM7lVJnfM5C4Mq/KctK753tJOk3NuTyzC4XZq3thSi/zhdxR0IkvVnnJF4BKfLbtrk7hN4Q/k93btf3EPadx94NKmqKddf/1aJHFl6G5nt7jXmTBw6/sDQHbXHsuf+NPGrpzD34/swgbBSy53JBXjd3vaN8zuVrRq7C6xGrvbZXKHTK7OM67KKZPrSMXY3YJ9/Uxza+IagMW96wsj+3ldM7SXdH5DOrg51KX0hv57PYG0Yd/f3H5faJ0DFy5cuHDhwoULFy5cuHDhwoUL99Xc4NwsjWtN9TsmjSvurw+ebxBu/3f/he9PwoULFy7ct3MzvV+W6X26T6JBJdMFwSKtAAAAAElFTkSuQmCC"
          className="imaap"
        />
      </div>
      <div className="second-first-conti">
        <h2>Product</h2>
        <h6>Indidual</h6>
        <h6>Businesses</h6>
        <h6>Request Demo</h6>
        <h6>Pricing</h6>
      </div>
      <div className="third-first-conti">
        <h2>Legal</h2>
        <h6>Privacy Policy</h6>
        <h6>Terms of Service</h6>
      </div>
      <div className="fourth-first-conti">
        <h2>Resources</h2>
        <h6>FAQs</h6>
        <h6>Blog</h6>
        <h6>Career</h6>
        <h6>Customer Stories</h6>
      </div>
      <div className="fifth-first-conti">
        <h2>Contact Us</h2>
        <h6>eazipay@gmail.com</h6>
        <h6>+234 816 878 9518</h6>
        <input type="text" className="inp-4" placeholder="Your email address" />
        <span>
          <button className="teleg"><img src="https://static-00.iconduck.com/assets.00/telegram-desktop-icon-2048x2048-lt9iwtrn.png" className="imade"/></button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
