export default function Tabs ({ BtnContainer, buttons, children }) {
    return (
        <>
            <BtnContainer>
                {buttons}
            </BtnContainer>
            {children}
        </>
    );
}