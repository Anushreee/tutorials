Pass HTML elements as props:

1. To put the text in multiple lines:

<Column header={[`Current period`,
    <div className="text-medium text-light">started March 23,2008</div> ]} colSpan={2} className="heading-secondary"/>

2. Multiple ClassNames
<div className={`${mainData.tableWidth} custom-wrapper`}>

{mainData.tableName? <h2 className="top-heading-primary">{mainData.tableName}</h2>: ''}

//Ternary operator
renderer={
          eachCol.cellTemplate === "valueRenderer"
            ? valueRenderer
            : undefined || eachCol.cellTemplate === "bubbleRenderer"
            ? bubbleRenderer
            : undefined || eachCol.cellTemplate === "statusRenderer"
            ? statusRenderer
            : undefined
        }

const details = props.details ? props.details : `You haven't created any ${props.title.toLowerCase()} yet`;

const capitalize = (word: string) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

globalFilter={typeof onGlobalFilter === 'function' ? '' : filterValue}
className={this.genClasses()}

private genPaginationClasses = (className: 'string', isLoading?: boolean) => {
        let classes = 'datatable-pagination';
        if (className) {
            classes += ` ${className}`;
        }
        if (isLoading) {
            classes += ' loading';
        }
        return classes;
    }

    if (selectionMode && children) {
        children.unshift(
            <PrimeColumn
                columnKey="select"
                selectionMode="multiple"
                key={React.Children.toArray(this.props.children).length}
                loadingBody={this.loadingBody}
            />
        );
    }