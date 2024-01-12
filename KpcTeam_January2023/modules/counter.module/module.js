gsap.utils.toArray(".counts").forEach(element => {
  let clean = v => (v + "").replace(/[^\d\.-]/gi, ""), // get rid of anything except numbers and periods
      num = clean(element.getAttribute("data-number")),
      decimals = (num.split(".")[1] || "").length,
      proxy = {val: parseFloat(clean(element.innerText)) || 0};
  gsap.to(proxy, {
    val: +num,
    duration: 2,
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none none"
    },
    onUpdate: () => element.innerText = formatNumber(proxy.val, decimals)
  });
});

function formatNumber(value, decimals) {
  let s = (+value).toLocaleString('en-US').split(".");
  return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
}