import { Box, Typography } from "@mui/material";
import Navbar from "../components/nav/Navbar";
import React from "react";

export default function Mentions() {
    return(
        <React.Fragment>
            <Navbar />
            <Box sx={{
                ml: 'auto',
                mr: 'auto',
                my: 5,
                width: '60%',
            }}>
                    <Typography variant="h3" sx={{ pb:2}}>Mentions Légales de Cesi Eats</Typography>
                    <Typography variant="h4">1. Conditions générales d'utilisation :</Typography>
                    <p>L'utilisation du site "Cesi Eats" implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. 
                        Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site "Cesi Eats" sont donc invités à les consulter de manière régulière.
                    </p>
                    <Typography variant="h4">2. Responsabilités :</Typography>
                    <p>Cesi Eats s'efforce de fournir des informations aussi précises que possible. 
                        Toutefois, la société ne saurait être tenue responsable des omissions, inexactitudes et carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                    </p>
                    <p>Le site "Cesi Eats" contient des liens hypertextes vers d'autres sites dont Cesi Eats n'a pas la possibilité de vérifier le contenu. 
                        En conséquence, Cesi Eats ne pourra être tenu responsable des contenus des sites ainsi visités.
                    </p>
                    <p>Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. 
                        De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                    </p>
                    <Typography variant="h4">3. Services fournis :</Typography>
                    <p>Le site "Cesi Eats" a pour objet de fournir une information concernant l'ensemble des activités de la société. 
                        Cesi Eats s’efforce de fournir sur le site "Cesi Eats" des informations aussi précises que possible. 
                        Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                    </p>
                    <Typography variant="h4" sx={{ pb:1}}>4. Données personnelles :</Typography>
                    <Typography variant="h5">4.1 Collecte des données personnelles :</Typography>
                    <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données personnelles vous concernant, en effectuant votre demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
                        Cesi Eats collecte des informations personnelles relatives à l'utilisateur uniquement pour le besoin de certains services proposés par le site "Cesi Eats". 
                    </p>
                    <p>
                        L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. 
                        Il est alors précisé à l'utilisateur du site "Cesi Eats" l’obligation ou non de fournir ces informations.
                    </p>
                    <Typography variant="h5">4.2 Cookies :</Typography>
                    <p>Le site "Cesi Eats" peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage.
                    Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.
                    </p>
                    <Typography variant="h4">5. Droit applicable et attribution de juridiction :</Typography>
                    <p> L'ensemble du contenu du site "Cesi Eats" (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Cesi Eats, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit de Cesi Eats.</p>
                    <p>Tout litige en relation avec l’utilisation du site "Cesi Eats" est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                    </p>
                    <p>Les principales lois concernées :
                    Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.
                    Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique. 
                    </p>
            </Box>
        </React.Fragment>
    )
};