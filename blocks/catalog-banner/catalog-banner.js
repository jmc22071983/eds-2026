/**
 * Banner de ejemplo del catalogo compartido (@seidor/eds-blocks).
 * Estructura: una fila con el texto y, opcionalmente, una segunda con un enlace.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const [textRow, linkRow] = [...block.children];

  const message = document.createElement('p');
  message.className = 'catalog-banner-message';
  message.textContent = textRow?.textContent.trim() || '';
  block.replaceChildren(message);

  const link = linkRow?.querySelector('a');
  if (link) {
    link.classList.add('catalog-banner-link');
    block.append(link);
  }
}
