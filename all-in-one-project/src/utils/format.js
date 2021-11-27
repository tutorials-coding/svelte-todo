export function format(value) {
  const formatted = value
    .replace(/\D/g, '')
    .replace(/(\d{1,2})(\d{1})?(\d{1,3})?(\d{1,4})?/, function(_, p1, p2, p3, p4) {
      let output = ""
      if (p1) output = `(${p1}`;
      if (p2) output += `${p2})`;
      if (p3) output += ` ${p3}`
      if (p4) output += ` ${p4}`
      return output;
    });
  return formatted;
}