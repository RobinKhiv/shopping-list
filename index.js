function input(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const text = $('#shopping-list-entry').val();
        $('ul').append(renderNewItem(text));
    });
}

function renderNewItem(item){
    return `
    <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `
}

$(input);
function deleteThis(){
    $('.shopping-item-delete').on('click', function(){
        this.closest('li').remove();
    })
}

function checkThis(){
    $('.shopping-item-toggle').on('click', function(ev){
        $(event.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
}

function main(){
    input();
    deleteThis();
    checkThis();
}

$(main);