export const TEXTURE_DOWNSAMPLE = ()=>Math.max(window.innerWidth,window.innerHeight)*(window.devicePixelRatio??1)/(256+64)/2,//400),
    DENSITY_DISSIPATION = 0.99999,
    VELOCITY_DISSIPATION = 0.99999,
    PRESSURE_DISSIPATION = 0.9999,
    PRESSURE_ITERATIONS = 25,
    SPLAT_RADIUS = 0.012;
