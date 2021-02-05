import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
} from "../InfoSection/InfoElements";

import { TextWrapper } from "./LegalStuffElements";

const LegalNoticeGerman = () => {
  return (
    <InfoContainer className="info_container_class">
      <InfoWrapper className="info_wrapper_class">
        <InfoRow className="info_row_class">
          <Column1>
            <TextWrapper>
              <h3>Impressum</h3>
              <br />
              <h4>Informationspflicht laut § 5 TMG</h4>
              <br />
              {/* <p>Andreas Köth Ecksteinstraße 29</p>
              <p>04277 Leipzig</p>
              <p>Deutschland</p> */}
              <br />
              <p>{/* <b>UID-Nummer:</b> DE12345678 */}</p>
              <p>{/* <b>Wirtschafts-ID:</b> DE123456789 */}</p>
              <br />
              {/* <p>Tel.: 01520/1326544</p>
              <p> E-Mail: andreas_koeth@gmx.de</p> */}
              <br />
              <p>{/* <b>Aufsichtsbehörde</b> */}</p>
              {/* <p>Bezirkshauptmannschaft Musterhausen</p> */}
              <p>{/* <b>Webseite der Aufsichtsbehörde</b> */}</p>
              {/* <p>https://www.aufsichtsbeoerde-musterhausen.de/</p> */}
              <p>{/* <b>Anschrift der Aufsichtsbehörde</b> */}</p>
              {/* <p>Musterweg 1, 12345 Musterhausen</p> */}
              <br />
              <p>
                <b>Berufsbezeichnung:</b>
              </p>
              <p>Webentwickler</p>
              <br />
              <h3>EU-Streitschlichtung</h3>
              <br />
              <p>
                Gemäß Verordnung über Online-Streitbeilegung in
                Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über
                die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                Verbraucher haben die Möglichkeit, Beschwerden an die Online
                Streitbeilegungsplattform der Europäischen Kommission
                unter http://ec.europa.eu/odr?tid=321230892 zu richten. Die
                dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem
                Impressum. Wir möchten Sie jedoch darauf hinweisen, dass wir
                nicht bereit oder verpflichtet sind, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </TextWrapper>
          </Column1>

          <Column2>
            <TextWrapper>
              <h3>Haftung für Inhalte dieser Website</h3>
              <br />
              <p>
                Wir entwickeln die Inhalte dieser Webseite ständig weiter und
                bemühen uns korrekte und aktuelle Informationen bereitzustellen.
                Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter
                für eigene Informationen, die wir zur Nutzung bereitstellen,
                nach den allgemeinen Gesetzen verantwortlich. Leider können wir
                keine Haftung für die Korrektheit aller Inhalte auf dieser
                Webseite übernehmen, speziell für jene die seitens Dritter
                bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis
                10 sind wir nicht verpflichtet, die von ihnen übermittelten oder
                gespeicherten Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Unsere
                Verpflichtungen zur Entfernung von Informationen oder zur
                Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen aufgrund von gerichtlichen oder behördlichen
                Anordnungen bleiben auch im Falle unserer
                Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt. Sollten
                Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte
                wir Sie uns umgehend zu kontaktieren, damit wir die
                rechtswidrigen Inhalte entfernen können. Sie finden die
                Kontaktdaten im Impressum.
              </p>
              <br />
              <h3>Haftung für Links auf dieser Website</h3>
              <br />
              <p>
                Unsere Webseite enthält Links zu anderen Webseiten für deren
                Inhalt wir nicht verantwortlich sind. Haftung für verlinkte
                Websites besteht für uns nicht, da wir keine Kenntnis
                rechtswidriger Tätigkeiten hatten und haben, uns solche
                Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir
                Links sofort entfernen würden, wenn uns Rechtswidrigkeiten
                bekannt werden. Wenn Ihnen rechtswidrige Links auf unserer
                Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden
                die Kontaktdaten im Impressum.
              </p>
              <br />
              <h3>Urheberrechtshinweis</h3>
              <br />
              <p>
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
                unterliegen dem Urheberrecht der Bundesrepublik Deutschland.
                Bitte fragen Sie uns bevor Sie die Inhalte dieser Website
                verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf
                anderen Websites erneut veröffentlichen. Falls notwendig, werden
                wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite
                rechtlich verfolgen. Sollten Sie auf dieser Webseite Inhalte
                finden, die das Urheberrecht verletzen, bitten wir Sie uns zu
                kontaktieren.
              </p>

              <br />
              <h3>Mediennachweis</h3>
              <br />
              <p>
                Das Video in der Hero-Sektion dieser Website stammen von
                https://www.pexels.com/. Die Abbildung im Abschnitt About dieser
                Website ist der Website https://undraw.co/ entnommen. Die Fotos
                in der auf dieser Website enthaltenen Webshop-Anwendung stammen
                aus https://unsplash.com/ und https://www.dreamstime.com/. Alle
                genannten Medien sind unter einer Creative Commons Lizenz frei
                verfügbar.
              </p>
              <br />
              <p>
                Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in
                Kooperation mit hashtagbeauty.de
              </p>
            </TextWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default LegalNoticeGerman;
