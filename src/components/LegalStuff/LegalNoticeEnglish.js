import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
} from "../InfoSection/InfoElements";

import { TextWrapper } from "./LegalStuffElements";
function LegalNoticeEnglish() {
  return (
    <InfoContainer className="info_container_class">
      <InfoWrapper className="info_wrapper_class">
        <InfoRow className="info_row_class">
          <Column1>
            <TextWrapper className="column1_text_wrapper">
              <h3>Legal Notice</h3>
              <br />
              <h4>Duty to inform according to § 5 TMG</h4>
              <br />
              <p>Andreas Köth Ecksteinstraße 29</p>
              <p>04277 Leipzig</p>
              <p>Germany</p>
              <br />
              <p>{/* <b>UID-Number:</b> DE12345678 */}</p>
              <p>{/* <b>Economic ID:</b> DE123456789 */}</p>
              <br />
              <p>Phone: 01520/1326544</p>
              <p>e-mail: andreas_koeth@gmx.de</p>
              <br />
              <p>{/* <b>Supervisory authority</b> */}</p>
              {/* <p>District administration Musterhausen</p> */}
              <p>{/* <b>Website of the supervisory authority</b> */}</p>
              {/* <p>https://www.aufsichtsbeoerde-musterhausen.de/</p> */}
              <p>{/* <b>Address of the supervisory authority</b> */}</p>
              {/* <p>Musterweg 1, 12345 Musterhausen</p> */}
              <br />
              <p>
                <b>Job title:</b>
              </p>
              <p>Web developer</p>
              <br />
              <p>
                Source: Created with the legal notice generator of AdSimple in
                cooperation with slashtechnik.de
              </p>
              <br />
              <h3>EU Dispute Resolution</h3>
              <br />
              <p>
                According to the Ordinance on Online Dispute Resolution in
                Consumer Matters (ODR Ordinance) we would like to inform you
                about the Online Dispute Resolution Platform (OS Platform).
                Consumers have the possibility to submit complaints to the
                Online Dispute Resolution Platform of the European Commission at
                http://ec.europa.eu/odr?tid=321230892. You will find the
                necessary contact details above in our legal notice. However, we
                would like to point out that we are not willing or obliged to
                participate in dispute resolution proceedings before a consumer
                arbitration board.
              </p>
            </TextWrapper>
          </Column1>

          <Column2>
            <TextWrapper className="column2_text_wrapper">
              <h3>Liability for contents of this website</h3>
              <br />
              <p>
                We are constantly developing the contents of this website and
                make every effort to provide correct and up-to-date information.
                According to Telemedia Act (TMG) §7 (1) we as service providers
                are responsible for our own information, which we make available
                for use, according to the general laws. Unfortunately, we cannot
                assume any liability for the correctness of all contents on this
                website, especially for those provided by third parties. As a
                service provider in the sense of §§ 8 to 10, we are not obliged
                to monitor the information transmitted or stored by you or to
                investigate circumstances that indicate illegal activity. Our
                obligations to remove information or to block the use of
                information according to the general laws due to court or
                official orders remain unaffected even in case of our
                non-responsibility according to §§ 8 to 10. Should you notice
                problematic or illegal content, please contact us immediately so
                that we can remove the illegal content. You can find the contact
                details in the legal notice.
              </p>
              <br />
              <h3>Liability for links on this website</h3>
              <br />
              <p>
                Our website contains links to other websites for whose content
                we are not responsible. We are not liable for linked websites,
                as we had and have no knowledge of illegal activities, we have
                not noticed any such illegality and we would remove links
                immediately if we became aware of any illegality. If you notice
                illegal links on our website, please contact us. You can find
                the contact details in the legal notice.
              </p>
              <br />
              <h3>Copyright notice</h3>
              <br />
              <p>
                All contents of this website (pictures, photos, texts, videos)
                are subject to the copyright of the Federal Republic of Germany.
                Please ask us before you distribute, reproduce or use the
                contents of this website such as republishing on other websites.
                If necessary, we will legally pursue the unauthorized use of
                parts of the contents of our site. If you find content on this
                website that violates copyright law, please contact us.
              </p>

              <br />
              <h3>Media credits</h3>
              <br />
              <p>
                The video in the hero section of this website is taken from
                https://www.pexels.com/. The illustration in the about section
                of this website is taken from https://undraw.co/. The fotos in
                the web shop application featured on this website are taken from
                https://unsplash.com/ and https://www.dreamstime.com/. All of
                the afore mentioned media is freely available under a creative
                commons license.
              </p>
              <br />
              <p>
                Source: Created with the AdSimple privacy generator in
                cooperation with hashtagbeauty.de
              </p>
            </TextWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}

export default LegalNoticeEnglish;
