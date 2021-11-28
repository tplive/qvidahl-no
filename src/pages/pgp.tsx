import * as React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'


interface AboutPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

export default class AboutPage extends React.Component<AboutPageProps> {

    public render() {
        return (
            <Layout>
                <SEO title="PGP" />
                <h1>My PGP key</h1>

                <p>My public PGP key is published at</p>
                <p><a href="https://pgp.mit.edu/pks/lookup?op=vindex&search=0x869505BFE3942FCE" target="_blank">MIT's public PGP server.</a></p>
                <p>Also, here it is:</p>
                <code>
                    -----BEGIN PGP PUBLIC KEY BLOCK-----

                    mDMEYJuXbRYJKwYBBAHaRw8BAQdAAZac9jrkC71MylHWxyKfnU1EsN3RbMJZWk1R
                    hm361Wu0IlRob21hcyBRdmlkYWhsIDx0aG9tYXNAcXZpZGFobC5ubz6IlAQTFgoA
                    PBYhBA3U4B2ypLy36lA3rYaVBb/jlC/OBQJgm5dtAhsDBQsJCAcCAyICAQYVCgkI
                    CwIEFgIDAQIeBwIXgAAKCRCGlQW/45QvzqO3AP4m+pBi806bdrrQr/qG1WU6GaaK
                    VWWXoVVhOZY4evub3QEArGBxAGEQuGjuQxrzZvILVTnj7uyUn1nH3Jc8vJx5mwy4
                    OARgm5dtEgorBgEEAZdVAQUBAQdAqW4SDPumsZvIE1Kat39R+t2hX5nyxD9x/Aqq
                    4nSeKB0DAQgHiHgEGBYKACAWIQQN1OAdsqS8t+pQN62GlQW/45QvzgUCYJuXbQIb
                    DAAKCRCGlQW/45QvznibAQCd2FIDU7cb/SN0WZE59952PHXDP3Xgqk49He4s6zBh
                    fgEAjbWeF80Ut6ifNyXT0AzJ0md66zAaObSpt/tgmhmdagg=
                    =ZY8U
                    -----END PGP PUBLIC KEY BLOCK-----
                </code>


                <p><a href="/">Go Home</a></p>
            </Layout>
        );
    }

}

