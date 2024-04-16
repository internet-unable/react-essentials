export default function Tabs ({ BtnContainer = 'menu', buttons, children }) {
    return (
        <>
            <BtnContainer>
                {buttons}
            </BtnContainer>
            {children}
        </>
    );
}