export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundImage: `url(data:image/jpeg;base64,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)`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '84px',
        // Size
        width: '84px',
        height: '84px',
    },
    avatarHello: { 
        // Position
        position: 'absolute', 
        left: 'calc(-100% - 44px - 28px)', 
        top: 'calc(50% - 24px)', 
        // Layering
        zIndex: '10000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',
    },
    supportWindow: {
        // Position
        position: 'fixed',
        bottom: '116px',
        right: '24px',
        // Size
        width: '400px',
        height: '480px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid #118c4f`,
        overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    },
    emailFormWindow: { 
        width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '308px',
        backgroundColor: '#118c4f',
        transform: 'skewY(-12deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '15%', 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: '600',
    },
    emailInput: { 
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid #118c4f',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '77%', 
        color: '#118c4f', 
        fontSize: '24px', 
        fontWeight: '600' 
    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'white',
    },
    loadingIcon: { 
        color: '#118c4f', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}